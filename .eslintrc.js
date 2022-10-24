module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    rules: {
        "vue/attributes-order": ["error", {
            order: [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                ["UNIQUE", "SLOT"],
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT"
            ],
            alphabetical: false
        }],
        "vue/max-attributes-per-line": ["error", {
            singleline: {
                max: 1
            },      
            multiline: {
                max: 1
            }
        }],
        "vue/html-self-closing": ["error", {
            html: {
                void: "never",
                normal: "always",
                component: "always"
            },
            svg: "always",
            math: "always"
        }],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        "vue/no-irregular-whitespace": ["error", {
            skipStrings: true,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false,
            skipHTMLAttributeValues: false,
            skipHTMLTextContents: false
        }],
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "vue/match-component-file-name": ["error", {
            extensions: ["vue"],
            shouldMatchCase: true
        }],
        "vue/order-in-components": ["error", {
            order: [
                "el",
                "name",
                "key",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                ["provide", "inject"],
                "ROUTER_GUARDS",
                "layout",
                "middleware",
                "validate",
                "scrollToTop",
                "transition",
                "loading",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "emits",
                "setup",
                "asyncData",
                "data",
                "fetch",
                "head",
                "computed",
                "watch",
                "watchQuery",
                "LIFECYCLE_HOOKS",
                "methods",
                ["template", "render"],
                "renderError"
            ]
        }],
        "comma-dangle": ["error", {
            arrays: "never",
            objects: "never",
            imports: "never",
            exports: "never",
            functions: "never"
        }]
    }
}