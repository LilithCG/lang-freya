import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const FreyaLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: "}", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        keyword: t.keyword,
        String: t.string,
        LineComment: t.lineComment,
        "{ }": t.paren
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "#"}
  }
})

export function Freya() {
  return new LanguageSupport(FreyaLanguage)
}
