import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

// eslint-config-next 16+ ships native ESLint 9 flat config. The previous
// setup routed it through the legacy FlatCompat.extends() bridge, which
// runs old .eslintrc-era JSON-schema validation (JSON.stringify) against
// these flat-config plugin objects — objects that are allowed to be
// self-referential (e.g. a plugin's own `configs` entry pointing back at
// itself) because flat config was never meant to be JSON-serialized. That
// mismatch is what produced "Converting circular structure to JSON" on
// every lint run. Importing the native flat config directly avoids
// FlatCompat entirely, so there's nothing left to serialize incorrectly.
const eslintConfig = [...nextCoreWebVitals, ...nextTypescript];

export default eslintConfig;
