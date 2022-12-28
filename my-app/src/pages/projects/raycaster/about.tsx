
function RaycasterAboutPage() {
  return (
    <div>
      
      <div className="nes-container is-dark is-rounded with-title is-centered me-3">
            <p className="title">About Raycaster <span className="text-muted">28/12/22</span></p>
            <p>The github for this page can be found at: <a href="https://github.com/Soup666/Raycasters">https://github.com/Soup666/Raycasters</a></p>
            <p>
                When joining Uni, I really wanted to dive deep into C++. It's a langauge I'd only breifly used and never sunk time into. However I realised pretty
                quickly that the first year of my Uni wasn't going to offer this. Someone hosted a C++ workshop, which I attended, but it only lasted one week
                unfortuantly. So I set out to learn by doing, starting with this Raycaster Project and, when Christmas hit, doing Advent of Code in C++ alone.
            </p>
            <p>
                This project contains a few different iterations. As writing this [28/12/22], it contains 7:                
            </p>
            <ul className="list-unstyled">
                <li>01-Basic</li>
                <li>02-FrameRates</li>
                <li>03-BiggerLevel</li>
                <li>04-Floor</li>
                <li>05-Warp[Bonus]</li>
                <li>06-Lighting</li>
                <li>07-Ceiling</li>
            </ul>
            <p>I have started a paper on the maths behidn it <a href="https://github.com/Soup666/Raycasters/blob/main/Papers/Raycaster.pdf">here</a>. But as
            of writing this it is unfinished and leaves a lot to be desired.</p>

            <p>
                The version on the site is a direct port of 06-Lighting. I accomplished the lighting by accident when trying to implement textures. 
                <span className="text-muted">[Which is next!]</span> And the weird blocky effect at the base of walls is a result of the port to js. 
                It's on my TODO list to fix.
            </p>
        </div>
    </div>
  );
}

export default RaycasterAboutPage;