import { Button, IconCopy } from '@supabase/ui'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import py from 'react-syntax-highlighter/dist/cjs/languages/hljs/python'
import sql from 'react-syntax-highlighter/dist/cjs/languages/hljs/sql'

import CodeBlockStyles from './CodeBlock.module.css'
import { monokaiCustomTheme } from './CodeEditorTheme'

interface Props {
  lang: 'js' | 'sql' | 'py'
  startingLineNumber?: number
  hideCopy?: boolean
  className?: string
  children?: string
  size?: 'small' | 'medium' | 'large'
}

export function CodeBlock(props: Props) {
  let lang = props.lang
    ? props.lang
    : props.className
    ? props.className.replace('language-', '')
    : 'js'
  // force jsx to be js highlighted
  if (lang === 'jsx') lang = 'js'

  SyntaxHighlighter.registerLanguage('js', js)
  SyntaxHighlighter.registerLanguage('py', py)
  SyntaxHighlighter.registerLanguage('sql', sql)

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={lang}
        style={monokaiCustomTheme}
        className={CodeBlockStyles['code-block']}
        customStyle={{
          padding: 0,
          fontSize: 12,
          lineHeight: 1.2,
          borderTop: '1px solid #393939',
          background: '#181818',
        }}
        showLineNumbers={lang === 'cli' ? false : true}
        lineNumberContainerStyle={{
          paddingTop: '128px',
        }}
        lineNumberStyle={{
          minWidth: '48px',
          background: '#1e1e1e',
          paddingLeft: '21px',
          marginRight: '12px',
          color: '#828282',
          fontSize: 12,
          paddingTop: '4px',
          paddingBottom: '4px',
        }}
      >
        {props.children}
      </SyntaxHighlighter>
      {!props.hideCopy && props.children ? (
        <div className="absolute right-2 top-2 dark">
          <CopyToClipboard text={props.children}>
            <Button
              type="outline"
              className="dark:bg-dark-800"
              icon={<IconCopy />}
            >
              Copy
            </Button>
          </CopyToClipboard>
        </div>
      ) : null}
    </div>
  )
}
