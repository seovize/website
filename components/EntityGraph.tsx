export function EntityGraph() {
  return (
    <svg
      viewBox="0 0 560 310"
      fill="none"
      role="img"
      aria-labelledby="entity-graph-title entity-graph-desc"
      className="w-full"
    >
      <title id="entity-graph-title">
        Semantic SEO entity graph: Abdul Ghani (Person) → Seovize (Organization) → SEO, Social Media, Content (Services) + Texas (Geographic Area)
      </title>
      <desc id="entity-graph-desc">
        Knowledge graph visualization showing how semantic SEO connects person, organization, service, and geographic entities to build search authority for Texas businesses
      </desc>

      {/* ── Connection lines ── */}
      {/* Person → Org */}
      <line x1="280" y1="80" x2="280" y2="130" stroke="var(--color-line)" strokeWidth="1.5" strokeDasharray="5 3"/>
      {/* Org → Services */}
      <line x1="250" y1="172" x2="110" y2="228" stroke="var(--color-line)" strokeWidth="1.5" strokeDasharray="5 3"/>
      <line x1="280" y1="175" x2="280" y2="228" stroke="var(--color-line)" strokeWidth="1.5" strokeDasharray="5 3"/>
      <line x1="310" y1="172" x2="450" y2="228" stroke="var(--color-line)" strokeWidth="1.5" strokeDasharray="5 3"/>

      {/* ── Edge relation labels ── */}
      <text x="290" y="110" fontSize="9" fill="var(--color-slate-mid)" fontFamily="monospace" letterSpacing="0.05em">worksFor →</text>
      <text x="135" y="213" fontSize="9" fill="var(--color-slate-mid)" fontFamily="monospace">provides</text>
      <text x="245" y="213" fontSize="9" fill="var(--color-slate-mid)" fontFamily="monospace">provides</text>
      <text x="352" y="213" fontSize="9" fill="var(--color-slate-mid)" fontFamily="monospace">areaServed</text>

      {/* ── Person node: Abdul Ghani ── */}
      <circle cx="280" cy="52" r="40" fill="#F97316"/>
      <circle cx="280" cy="52" r="40" fill="url(#orange-fade)" opacity=".3"/>
      <text x="280" y="48" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">Abdul</text>
      <text x="280" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">Ghani</text>
      {/* @type badge */}
      <rect x="246" y="84" width="68" height="16" rx="8" fill="#FFEDD5"/>
      <text x="280" y="95" textAnchor="middle" fontSize="9" fill="#9A3412" fontWeight="700" fontFamily="monospace">@Person</text>

      {/* ── Organization node: Seovize ── */}
      <circle cx="280" cy="152" r="40" fill="#14B8A6"/>
      <text x="280" y="148" textAnchor="middle" fontSize="14" fontWeight="800" fill="white" fontFamily="system-ui, sans-serif">Seovize</text>
      <text x="280" y="164" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="monospace">#organization</text>
      {/* @type badge */}
      <rect x="232" y="184" width="96" height="16" rx="8" fill="#CCFBF1"/>
      <text x="280" y="195" textAnchor="middle" fontSize="9" fill="#0F766E" fontWeight="700" fontFamily="monospace">@Organization</text>

      {/* ── Service node: SEO ── */}
      <circle cx="110" cy="258" r="34" fill="#38BDF8"/>
      <text x="110" y="254" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">SEO</text>
      <text x="110" y="268" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="system-ui, sans-serif">Services</text>
      <rect x="77" y="284" width="66" height="16" rx="8" fill="#E0F2FE"/>
      <text x="110" y="295" textAnchor="middle" fontSize="9" fill="#0369A1" fontWeight="700" fontFamily="monospace">@Service</text>

      {/* ── Service node: Social Media ── */}
      <circle cx="280" cy="258" r="34" fill="#38BDF8"/>
      <text x="280" y="254" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">Social</text>
      <text x="280" y="268" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="system-ui, sans-serif">Media</text>
      <rect x="247" y="284" width="66" height="16" rx="8" fill="#E0F2FE"/>
      <text x="280" y="295" textAnchor="middle" fontSize="9" fill="#0369A1" fontWeight="700" fontFamily="monospace">@Service</text>

      {/* ── Location node: Texas ── */}
      <circle cx="450" cy="258" r="34" fill="#14B8A6" fillOpacity=".65"/>
      <circle cx="450" cy="258" r="34" stroke="#14B8A6" strokeWidth="2"/>
      <text x="450" y="254" textAnchor="middle" fontSize="13" fontWeight="800" fill="white" fontFamily="system-ui, sans-serif">Texas</text>
      <text x="450" y="268" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif">areaServed</text>
      <rect x="408" y="284" width="84" height="16" rx="8" fill="#CCFBF1"/>
      <text x="450" y="295" textAnchor="middle" fontSize="9" fill="#0F766E" fontWeight="700" fontFamily="monospace">@GeoArea</text>

      {/* Gradient def */}
      <defs>
        <radialGradient id="orange-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF" stopOpacity=".3"/>
          <stop offset="100%" stopColor="#F97316" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
