import Head from 'next/head'

export default function QuizHead({props}) {
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="UTF-8" />
            <title>{props.title}</title>
            <meta property="og:description" content="WizardQuiz | Imersão React + Next Js"/>
            <meta property="og:url" content="https://wizardquiz.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content={props.bg} />
            
            <meta name="keywords" content="HTML, CSS, JavaScript" />
            <meta property="article:author" content={props.author} />
            <link rel="icon" type="image/png" href={props.icon} />
        </Head>
    )
}