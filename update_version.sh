#!/bin/sh

currentVersion="$(sed -En 's/^.*"version": "([0-9\.]+)".*$/\1/p' package.json)"
sed -E "s/\"version\": \"([0-9\.]+)\"/\"version\": \"${currentVersion}\"/" -i projects/mapir-angular-component/package.json
