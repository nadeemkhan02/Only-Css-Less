import React from "react";
// import "../index.css";
import "../LESS Folder/style.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <div id="TopContainer">
        <NavBar />
        <div id="box1">
          <h1>Title of a longer featured blog post</h1>
          <p>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <h2>
            <b>Continue reading...</b>
          </h2>
        </div>
      </div>

      <div id="container2">
        <div id="c2-box1">
          <div className="box-style1"></div>
          <div className="box-style2"></div>
        </div>
        <div id="c2-box2">
          <div className="box-style1"></div>
          <div className="box-style2"></div>
        </div>
      </div>

      <div id="constainer3">
        <div id="c3-box1">
          <h1>From the Firehose</h1>
          <hr />
          <h1>Sample blog post</h1>
          <p>January 1, 2014 by Mark</p>
          <p>
            This blog post shows a few different types of content that’s
            supported and styled with Bootstrap. Basic typography, images, and
            code are all supported.
          </p>
          <hr />
          <p>
            Yeah, she dances to her own beat. Oh, no. You could've been the
            greatest. 'Cause, baby, you're a firework. Maybe a reason why all
            the doors are closed. Open up your heart and just let it begin. So
            très chic, yeah, she's a classic.
            <br />
            Bikinis, zucchinis, Martinis, no weenies. I know there will be
            sacrifice but that's the price. This is how we do it. I'm not
            sticking around to watch you go down. You think you're so rock and
            roll, but you're really just a joke. I know one spark will shock the
            world, yeah yeah. Can't replace you with a million rings.
            <br />
            Trying to connect the dots, don't know what to tell my boss. Before
            you met me I was alright but things were kinda heavy. You just gotta
            ignite the light and let it shine. Glitter all over the room pink
            flamingos in the pool.
          </p>
          <h1>Heading</h1>
          <p>
            Suiting up for my crowning battle. If you only knew what the future
            holds. Bring the beat back. Peach-pink lips, yeah, everybody stares.
          </p>
          <h1>Sub-heading</h1>
          <p>
            You give a hundred reasons why, and you say you're really gonna try.
            Straight stuntin' yeah we do it like that. Calling out my name.
            ‘Cause I, I’m capable of anything. Example code block Before you met
            me I was alright but things were kinda heavy. You just gotta ignite
            the light and let it shine.
          </p>
          <h1>Sub-heading</h1>
          <p>
            You got the finest architecture. Passport stamps, she's
            cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned
            that one day I'd be losing you. She eats your heart out.
            <ul>
              <li>Got a motel and built a fort out of sheets.</li>
              <li>Your kiss is cosmic, every move is magic.</li>
              <li>Suiting up for my crowning battle.</li>
            </ul>
          </p>
          <p>
            Takes you miles high, so high, 'cause she’s got that one
            international smile.
            <ol>
              <li> Scared to rock the boat and make a mess.</li>
              <li>I could have rewrite your addiction.</li>
              <li> I know you get me so I let my walls come down.</li>
            </ol>
            After a hurricane comes a rainbow.
          </p>
          <h1>Another blog post</h1>
          <p>December 23, 2013 by Jacob</p>
          <p>
            I am ready for the road less traveled. Already brushing off the
            dust. Yeah, you're lucky if you're on her plane. I used to bite my
            tongue and hold my breath. Uh, She’s a beast. I call her Karma (come
            back). Black ray-bans, you know she's with the band. I can't sleep
            let's run away and don't ever look back, don't ever look back.
            <br />
            Growing fast into a bolt of lightning. Be careful Try not to lead
            her on
            <br />
            I'm intrigued, for a peek, heard it's fascinating. Oh oh! Wanna be a
            victim ready for abduction. She's got that international smile, oh
            yeah, she's got that one international smile. Do you ever feel, feel
            so paper thin. I’m gon’ put her in a coma. Sun-kissed skin so hot
            we'll melt your popsicle.
            <br />
            This is transcendental, on another level, boy, you're my lucky star.
          </p>
          <h1>New feature</h1>
          <p>December 14, 2013 by Chris</p>
          <p>
            From Tokyo to Mexico, to Rio. Yeah, you take me to utopia. I'm
            walking on air. We'd make out in your Mustang to Radiohead. I mean
            the ones, I mean like she's the one. Sun-kissed skin so hot we'll
            melt your popsicle. Slow cooking pancakes for my boy, still up,
            still fresh as a Daisy.
            <ul>
              <li>I hope you got a healthy appetite.</li>
              <li>You're never gonna be unsatisfied.</li>
              <li>Got a motel and built a fort out of sheets.</li>
            </ul>
            Don't need apologies. Boy, you're an alien your touch so foreign,
            it's supernatural, extraterrestrial. Talk about our future like we
            had a clue. I can feel a phoenix inside of me.
          </p>
          <button type="button">Older</button><button type="button" disabled>Newer</button>
        </div>
        <div id="c3-box2">
          <div id="c3-innerBox1">
          <h1>About</h1>
            <p>
               Saw you downtown singing the Blues. Watch you circle the
              drain. Why don't you let me stop by? Heavy is the head that wears
              the crown. Yes, we make angels cry, raining down on earth from up
              above.
            </p>
          </div>
          <div id="c3-innerBox2">
            <ul>
            <h1>Archives</h1>
              <li><a href="/#" >February 2014</a></li>
              <li><a href="/#" >January 2014</a></li>
              <li><a href="/#" >December 2013</a></li>
              <li><a href="/#" > November 2013</a></li>
              <li><a href="/#" >October 2013</a></li>
              <li><a href="/#" >September 2013</a></li>
              <li><a href="/#" >August 2013</a></li>
              <li><a href="/#" > July 2013</a></li>
              <li><a href="/#" >June 2013</a></li>
              <li><a href="/#" > May 2013</a></li>
              <li><a href="/#" > April 2013</a></li>
            </ul>
            <ul>
            <h1>Elsewhere</h1>
            <li><a href="/#" >GitHub</a></li>
            <li><a href="/#" >Twitter</a></li>
            <li><a href="/#" >Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
