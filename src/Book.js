export const Book = (props) => {
    // console.log(props);
    const { img, title, author, number } = props;
    
    return (<article className="book">
        <img src={ img } alt="Atomic Habits"/>
        <h2>{ title }</h2>
        <button >display title</button>
        <h4>{ author }</h4>
        <span className="number">{ `# ${number + 1}` }</span>
        
    </article>);
}