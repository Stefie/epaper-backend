self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "has": [
          {
            "type": "host",
            "value": "(?<tenant>.*)"
          }
        ],
        "source": "/((?!admin|api))tenant-domains/:path*",
        "destination": "/tenant-domains/:tenant/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()