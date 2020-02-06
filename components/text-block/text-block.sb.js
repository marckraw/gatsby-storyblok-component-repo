module.exports = {
    name: "text-block",
    display_name: "Text block",
    is_root: false,
    is_nestable: true,
    schema: {
        title_size: {
            type: "option",
            use_uuid: true,
            options: [
                {
                    value: "6",
                    name: "small"
                },
                {
                    value: "5",
                    name: "medium"
                },
                {
                    value: "4",
                    name: "large"
                },
                {
                    value: "",
                    name: ""
                }
            ],
            default_value: "4"
        },
        title: {
            type: "text"
        },
        text_weight: {
            type: "option",
            use_uuid: true,
            options: [
                {
                    value: "normal",
                    name: "normal"
                },
                {
                    value: "light",
                    name: "light"
                }
            ],
            default_value: "normal",
            can_sync: true
        },
        content: {
            type: "markdown",
            rich_markdown: false
        }
    }
};
