import { describe, expect, it } from "vitest";
import { daysSince, determineDueStep, nurtureSchedule } from "@/lib/nurture-sequence";

describe("nurtureSchedule", () => {
  it("has 6 steps (1-6), matching the drafted Day 2/5/9/13/16/18 sequence", () => {
    expect(nurtureSchedule).toHaveLength(6);
    expect(nurtureSchedule.map((s) => s.step)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(nurtureSchedule.map((s) => s.day)).toEqual([2, 5, 9, 13, 16, 18]);
  });

  it("every step produces non-empty, personalized text and html", () => {
    for (const step of nurtureSchedule) {
      expect(step.buildText("Jamie")).toContain("Jamie");
      expect(step.buildHtml("Jamie")).toContain("Jamie");
      expect(step.subject.length).toBeGreaterThan(0);
    }
  });

  /**
   * Claim guards, added 2026-08-11.
   *
   * Sprint 2.1's claim audit and the 2026-08-02 report retraction both swept
   * `app/` only, so this file kept sending real recipients the exact claims
   * those passes removed from the site. These tests make that class of
   * regression fail in CI instead of in someone's inbox.
   */
  describe("claim guards", () => {
    const allCopy = nurtureSchedule
      .flatMap((s) => [s.subject, s.buildText("Jamie"), s.buildHtml("Jamie")])
      .join("\n");

    it("states no bare statistic without a cited source", () => {
      // Any "42%", "3–5x", "50-500x" style figure in outbound copy must come
      // with a source. Nothing in this sequence currently cites one, so the
      // correct state is zero such figures.
      const statistics = allCopy.match(/\d+(?:[–-]\d+)?\s?(?:%|x\b)/gi) ?? [];
      expect(statistics).toEqual([]);
    });

    it("never claims semantic SEO guarantees or causes AI citation", () => {
      // The specific causality overclaim Sprint 2.1 corrected site-wide.
      for (const phrase of [
        "mechanically, how you get cited",
        "literally the discipline that gets you cited",
        "guarantees citation",
        "will get you cited",
      ]) {
        expect(allCopy.toLowerCase()).not.toContain(phrase.toLowerCase());
      }
    });

    it("never offers the withdrawn Texas report as real content", () => {
      expect(allCopy).not.toContain("texas-digital-marketing-report-2026");
      expect(allCopy.toLowerCase()).not.toContain("next report edition");
    });
  });
});

describe("determineDueStep", () => {
  it("returns null when not enough days have elapsed for the next step", () => {
    expect(determineDueStep(1, 0)).toBeNull(); // step 1 needs day >= 2
  });

  it("returns the next step once its day threshold is reached", () => {
    const due = determineDueStep(2, 0);
    expect(due?.step).toBe(1);
  });

  it("returns the immediate next step even if further behind, not a burst of all overdue steps", () => {
    // 20 days elapsed, but only step 1 has ever been sent (currentStep=1) —
    // should return step 2 (day 5), not jump straight to step 6.
    const due = determineDueStep(20, 1);
    expect(due?.step).toBe(2);
  });

  it("returns null once every step has been sent", () => {
    expect(determineDueStep(100, 6)).toBeNull();
  });
});

describe("daysSince", () => {
  it("returns 0 for today's date", () => {
    const today = new Date().toISOString().slice(0, 10);
    expect(daysSince(today)).toBe(0);
  });

  it("returns a positive integer for a past date", () => {
    const tenDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    expect(daysSince(tenDaysAgo)).toBeGreaterThanOrEqual(9);
    expect(daysSince(tenDaysAgo)).toBeLessThanOrEqual(10);
  });
});
