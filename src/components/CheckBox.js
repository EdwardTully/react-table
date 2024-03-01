import React from 'react'

export const CheckBox=React.forwardRef(({indeterminate, ...rest}, ref)=>{
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(()=>{
        resolvedRef.current.indeterminate=indeterminate
    }, [resolvedRef, indeterminate])

    return(
        <>
        <inpute type='checkbox' ref={resolvedRef} {...rest}/>
        </>
    )
})

