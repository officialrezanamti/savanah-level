import { ColorWheelIcon } from "@sanity/icons/ColorWheel";
import { HighlightIcon } from "@sanity/icons/Highlight";
import { LinkIcon } from "@sanity/icons/Link";
import { TextIcon } from "@sanity/icons/Text";
import { defineArrayMember, defineField, defineType } from "sanity";
import {
  HighlightDecorator,
  SubscriptDecorator,
  SuperscriptDecorator,
  TextDirectionAnnotation,
  TextDirectionIcon,
  TextColorAnnotation,
} from "./portableTextMarks";

/**
 * Rich text body for blog posts: standard prose blocks plus inline
 * highlighting/color, a code block (via @sanity/code-input), and a
 * video embed object for YouTube/Vimeo links.
 */
export const blockContentType = defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Inline code", value: "code" },
          {
            title: "Highlight",
            value: "highlight",
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
          {
            title: "Superscript",
            value: "sup",
            icon: TextIcon,
            component: SuperscriptDecorator,
          },
          {
            title: "Subscript",
            value: "sub",
            icon: TextIcon,
            component: SubscriptDecorator,
          },
        ],
        annotations: [
          defineField({
            name: "link",
            title: "Link",
            type: "object",
            icon: LinkIcon,
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (rule) =>
                  rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              }),
              defineField({
                name: "blank",
                title: "Open in new tab",
                type: "boolean",
                initialValue: false,
              }),
            ],
          }),
          defineField({
            name: "textColor",
            title: "Text color",
            type: "object",
            icon: ColorWheelIcon,
            components: { annotation: TextColorAnnotation },
            fields: [
              defineField({
                name: "color",
                title: "Color",
                type: "string",
                options: {
                  layout: "radio",
                  list: [
                    { title: "Orange", value: "#e97835" },
                    { title: "Navy", value: "#16233a" },
                    { title: "Green", value: "#3d8065" },
                    { title: "Blue", value: "#3478a8" },
                    { title: "Ink", value: "#263238" },
                  ],
                },
              }),
            ],
          }),
          defineField({
            name: "textDirection",
            title: "Text direction",
            type: "object",
            icon: TextDirectionIcon,
            components: { annotation: TextDirectionAnnotation },
            fields: [
              defineField({
                name: "direction",
                title: "Direction",
                type: "string",
                options: {
                  layout: "radio",
                  list: [
                    { title: "Left", value: "left" },
                    { title: "Center", value: "center" },
                    { title: "Right", value: "right" },
                  ],
                },
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineArrayMember({
      type: "code",
      title: "Code block",
      options: {
        withFilename: true,
        languageAlternatives: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "JSX", value: "jsx" },
          { title: "TSX", value: "tsx" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "JSON", value: "json" },
          { title: "Bash", value: "bash" },
          { title: "Markdown", value: "markdown" },
          { title: "Plain text", value: "text" },
        ],
      },
    }),
    defineArrayMember({ type: "videoEmbed" }),
  ],
});
