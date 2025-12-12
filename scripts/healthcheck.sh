#!/bin/sh
curl -fsS http://localhost:3000/health || exit 1
