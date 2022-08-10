import React from "react";

type PageTitlePropsType = {
    title: string
}

export const PageTitle = React.memo((props: PageTitlePropsType)=> {

    return <div><h1>{props.title}</h1></div>
}
)