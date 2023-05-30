'use client'
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { docco, monokai, monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, materialOceanic} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({codeText, language}: any) => {
  return (
    <SyntaxHighlighter 
      language={language} 
      style={materialOceanic}
      showLineNumbers={true}
      wrapLines={false}
      wrapLongLines={false}
    >
      {codeText}
    </SyntaxHighlighter>
  )
}

export default CodeBlock;

// 'use client'

// import { CopyBlock, github, monokai, dracula, CodeBlock as Block } from 'react-code-blocks';

// const CodeBlock = ({codeText, language}: any) => {
//   return (
//     <CopyBlock
//       text={codeText}
//       language={language}
//       theme={github}
//       showLineNumbers={true}
//       //highlight='1-5'
//     />
//   )
// }

// export default CodeBlock;


// import Lowlight from 'react-lowlight'
// import 'react-lowlight/all'
// import 'highlight.js/styles/default.css'
// import javascript from 'highlight.js/lib/languages/javascript'


// const CodeBlock = ({codeText, language}: any) => {
//   Lowlight.registerLanguage(language, javascript)
//   return (
//     <Lowlight 
//       value={codeText}
//       language={language}
//     />
//   )
// }

// export default CodeBlock