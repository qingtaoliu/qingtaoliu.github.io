#!/bin/bash
echo "start vue build ..."
cd me
npm --registry=https://registry.npm.taobao.org install
npm run build
echo " end "
