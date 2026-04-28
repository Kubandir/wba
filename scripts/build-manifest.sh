#!/bin/sh
# Regenerate img/galerie/manifest.json from the contents of img/galerie/.
# Run this whenever you add or remove photos in the gallery folder.

cd "$(dirname "$0")/../img/galerie" || exit 1

ls | grep -viE '\.(json|md)$' | python3 -c "
import json, sys
files = [l.strip() for l in sys.stdin if l.strip()]
print(json.dumps(files, indent=2))
" > manifest.json

echo "Wrote manifest.json with $(grep -c '\".*\"' manifest.json) entries."
