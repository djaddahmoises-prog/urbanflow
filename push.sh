#!/bin/bash
# Run this once to push to GitHub.
# Usage: bash push.sh ghp_YOURTOKEN

TOKEN=$1
if [ -z "$TOKEN" ]; then
  echo "Usage: bash push.sh ghp_YOURTOKEN"
  echo ""
  echo "Get a token at: https://github.com/settings/tokens/new"
  echo "  - Note: urbanflow-push"
  echo "  - Expiration: 90 days"
  echo "  - Scope: check 'repo' (top-level)"
  exit 1
fi

git push "https://${TOKEN}@github.com/djaddahmoises-prog/urbanflow.git" claude/stitch-connection-setup-AEXjh
