import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";

//   const a = "hello";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi harum,
          dolores quas sequi officia nihil, corporis illo fugit quasi similique
          consequatur! Modi beatae, quas vero omnis cum illum aperiam ratione?
          Recusandae, necessitatibus iste reprehenderit, sed esse sunt alias
          repudiandae cumque sequi perspiciatis labore quis laboriosam.
          Explicabo ratione non optio sapiente, illo iure aspernatur est dolores
          culpa, quisquam facere sunt recusandae obcaecati cum ex quo! Magni
          cumque molestiae minus illum ab veniam ut pariatur, aut veritatis
          doloremque est optio esse, aliquid impedit adipisci quos dicta quod!
          Quo et corporis repellat enim ab, ut tenetur ad eveniet autem quam
          explicabo perferendis commodi.
        </p>
      </div>
    </>
  );
};

export default Home;
