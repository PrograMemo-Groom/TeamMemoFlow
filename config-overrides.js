const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function override(config, env) {
    // 1. Compression Plugin 추가
    config.plugins.push(new CompressionPlugin());

    // 2. SCSS 로더 설정
    const oneOfRuleIndex = config.module.rules.findIndex((rule) =>
        Array.isArray(rule.oneOf)
    );

    if (oneOfRuleIndex >= 0) {
        const scssRule = {
            test: /\.scss$/,
            use: [
                "style-loader", // CSS를 DOM에 삽입
                {
                    loader: "css-loader", // CSS를 JavaScript로 로드
                    options: {
                        modules: {
                            auto: true, // `.module.scss` 파일에만 CSS Modules 활성화
                        },
                    },
                },
                "sass-loader", // SCSS를 CSS로 컴파일
            ],
        };

        // 기존 `oneOf` 배열에 SCSS 규칙 추가
        config.module.rules[oneOfRuleIndex].oneOf.unshift(scssRule);
    }

    return config;
};
