let ContentText = ({content}) => {
    return(
        <div>
            {content.map((item, index)=>(<p style={{margin: '30px 0px', textAlign: 'justify'}} key={index}>{item}</p>))}
        </div>
    )
}
export default ContentText;