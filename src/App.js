import { useEffect, useState } from 'react';
import './App.css';

function App () {
  const headerStyle = {
    color: "blue",
    backgroundColor: "cyan",
    border: "1px solid blue",
    borderRadius: "10px",
    padding: "10px"
  };

  const [ todoData, setTodoData ] = useState( [] );

  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/todos' )
      .then( res => res.json() )
      .then( data => setTodoData( data ) );
  }, [] )

  const Todo = ( props ) => {
    const todo = props.todo;
    return (
      <div>
        {
          todo.map( td => <Td key={ td.id } td={ td } /> )
        }
      </div>
    )
  }

  const Td = props => {
    const { userId, id, title } = props.td;
    return (
      <div className="todo bg-info text-success">
        <h2>User Id: { userId }</h2>
        <h3>Blog Id: { id }</h3>
        <h1>{ title }</h1>
      </div>
    )
  }


  const [ charge, setCharge ] = useState( 10 );

  const handleBatteryDown = () => {
    const newCharge = charge - 1;
    ( newCharge > 0 ) ? setCharge( newCharge ) : setCharge( 'Charge Finished!!!' );
    /* if ( charge === 0 ) {
      return;
    }
    else {
      setCharge( charge - 1 );
    } */
  }

  const Mobile = () => {
    return (
      <div className="mobile">
        <h2>{ charge }</h2>
        <button className="btn btn-primary mt-2" onClick={ handleBatteryDown }>Battery Down</button>
      </div>
    )
  }

  const Blog = ( props ) => {
    return (
      <div className="custom-blog">
        <h2 style={ headerStyle }>Custom Blog: { props.header }</h2>
        <h3>Author: { props.author }</h3>
        <p style={ { backgroundColor: "lightblue", border: "2px solid blue", color: "blue", padding: "10px", borderRadius: "10px", textAlign: "justify" } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quam natus nostrum nihil quos saepe? Asperiores quia, veritatis minima recusandae assumenda consequuntur quaerat eius aspernatur debitis temporibus, amet iure quo expedita! Nisi ullam explicabo saepe obcaecati omnis soluta, labore error sit beatae non dicta blanditiis quisquam? Soluta, corporis dicta corrupti, ad veritatis velit aperiam totam quam suscipit qui cumque, accusamus consectetur harum magni et repudiandae maiores sit quidem voluptates! Consequuntur blanditiis, ducimus assumenda perspiciatis eius eveniet nisi natus aliquam doloribus animi. Neque corporis architecto labore dignissimos pariatur minus minima voluptas ad quia corrupti impedit ea temporibus, tempore totam, earum aspernatur.</p>
      </div>
    );
  };

  return (
    <div className="App">
      <Mobile></Mobile>
      <Todo todo={ todoData }></Todo>
      <Blog header="1" author="Sami"></Blog>
      <Blog header="2" author="Farmee"></Blog>
      <Blog header="3" author="Arishamma"></Blog>
      <h1 style={ { backgroundColor: "floralwhite", padding: "10px", border: "1px solid blue", margin: "20px", borderRadius: "20px" } }>This is my blog</h1>
      <article className="blog">
        <h3 style={ headerStyle }>Blog-1</h3>
        <p style={ { backgroundColor: "gray", border: "2px solid blue", color: "floralwhite", padding: "10px", borderRadius: "10px", textAlign: "justify" } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, voluptatibus velit culpa dignissimos cum fugiat assumenda dolorem quibusdam quisquam ut. Et dolorem aliquid adipisci hic officia fugiat aliquam necessitatibus ipsam ipsum eligendi voluptates modi reprehenderit nostrum alias, deleniti laudantium distinctio soluta saepe cumque ut laborum asperiores illum unde sapiente. Magnam ipsam facilis recusandae animi consectetur beatae atque corrupti debitis doloremque facere, sit temporibus ut nemo, maiores, minus iusto? Eius unde natus at totam vitae incidunt vel aperiam repellendus, molestias voluptatem nobis odio exercitationem quibusdam quaerat possimus perferendis eligendi quia voluptates ipsa ut ab atque rem consequatur? Rem repellendus sit magnam dolorum. Esse aliquid explicabo incidunt error dolorem quidem fuga eveniet animi ut consequatur reprehenderit magnam, enim molestiae mollitia optio, aut quibusdam aspernatur qui quam voluptas. Sunt quis laboriosam inventore error eaque libero a amet, obcaecati quod cum nam neque vitae corrupti laborum minus explicabo assumenda beatae officia nihil rem quia ex animi temporibus omnis. Quaerat, voluptatibus dolores voluptatem provident impedit dolorum, porro aliquid adipisci, sapiente omnis facere sequi. Cumque, numquam! Mollitia dolorum error, illo, temporibus, saepe maxime qui cum quia quaerat voluptas libero. Adipisci molestiae eligendi, expedita inventore quas voluptate nesciunt dolor quidem aliquid repudiandae tenetur dicta odit est quaerat.</p>
      </article>
      <article className="blog">
        <h3 style={ headerStyle }>Blog-2</h3>
        <p style={ { backgroundColor: "gray", border: "2px solid blue", color: "floralwhite", padding: "10px", borderRadius: "10px", textAlign: "justify" } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, voluptatibus velit culpa dignissimos cum fugiat assumenda dolorem quibusdam quisquam ut. Et dolorem aliquid adipisci hic officia fugiat aliquam necessitatibus ipsam ipsum eligendi voluptates modi reprehenderit nostrum alias, deleniti laudantium distinctio soluta saepe cumque ut laborum asperiores illum unde sapiente. Magnam ipsam facilis recusandae animi consectetur beatae atque corrupti debitis doloremque facere, sit temporibus ut nemo, maiores, minus iusto? Eius unde natus at totam vitae incidunt vel aperiam repellendus, molestias voluptatem nobis odio exercitationem quibusdam quaerat possimus perferendis eligendi quia voluptates ipsa ut ab atque rem consequatur? Rem repellendus sit magnam dolorum. Esse aliquid explicabo incidunt error dolorem quidem fuga eveniet animi ut consequatur reprehenderit magnam, enim molestiae mollitia optio, aut quibusdam aspernatur qui quam voluptas. Sunt quis laboriosam inventore error eaque libero a amet, obcaecati quod cum nam neque vitae corrupti laborum minus explicabo assumenda beatae officia nihil rem quia ex animi temporibus omnis. Quaerat, voluptatibus dolores voluptatem provident impedit dolorum, porro aliquid adipisci, sapiente omnis facere sequi. Cumque, numquam! Mollitia dolorum error, illo, temporibus, saepe maxime qui cum quia quaerat voluptas libero. Adipisci molestiae eligendi, expedita inventore quas voluptate nesciunt dolor quidem aliquid repudiandae tenetur dicta odit est quaerat.</p>
      </article>
      <article className="blog">
        <h3 style={ headerStyle }>Blog-3</h3>
        <p style={ { backgroundColor: "gray", border: "2px solid blue", color: "floralwhite", padding: "10px", borderRadius: "10px", textAlign: "justify" } }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, voluptatibus velit culpa dignissimos cum fugiat assumenda dolorem quibusdam quisquam ut. Et dolorem aliquid adipisci hic officia fugiat aliquam necessitatibus ipsam ipsum eligendi voluptates modi reprehenderit nostrum alias, deleniti laudantium distinctio soluta saepe cumque ut laborum asperiores illum unde sapiente. Magnam ipsam facilis recusandae animi consectetur beatae atque corrupti debitis doloremque facere, sit temporibus ut nemo, maiores, minus iusto? Eius unde natus at totam vitae incidunt vel aperiam repellendus, molestias voluptatem nobis odio exercitationem quibusdam quaerat possimus perferendis eligendi quia voluptates ipsa ut ab atque rem consequatur? Rem repellendus sit magnam dolorum. Esse aliquid explicabo incidunt error dolorem quidem fuga eveniet animi ut consequatur reprehenderit magnam, enim molestiae mollitia optio, aut quibusdam aspernatur qui quam voluptas. Sunt quis laboriosam inventore error eaque libero a amet, obcaecati quod cum nam neque vitae corrupti laborum minus explicabo assumenda beatae officia nihil rem quia ex animi temporibus omnis. Quaerat, voluptatibus dolores voluptatem provident impedit dolorum, porro aliquid adipisci, sapiente omnis facere sequi. Cumque, numquam! Mollitia dolorum error, illo, temporibus, saepe maxime qui cum quia quaerat voluptas libero. Adipisci molestiae eligendi, expedita inventore quas voluptate nesciunt dolor quidem aliquid repudiandae tenetur dicta odit est quaerat.</p>
      </article>

    </div>
  );
}

export default App;