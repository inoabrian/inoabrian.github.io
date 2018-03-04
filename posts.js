(
    function() {
        let postsJSON = {};

        fetch('posts.json')
            .then(function(res) {
                return res.json();
            })
            .then(function (data) {
                postsJSON = data;

                renderPosts(postsJSON);
            });
    }
)();

function renderPosts(postList) {
    console.info(postList);

    let component = document.querySelector('main > section > .container > .body > .body-posts > .body-posts-content :last-child');

    component.innerHTML = postList.posts
    .filter((post) => post.active)
    .map((post) => {
        return `
            <div class="blog-post">
                <div class="blog-post-title">
                    <a href="./posts/${post.postLink}_${post.title.split(' ').join('')}.html" target="_blank">
                        ${post.title}
                    </a>
                </div>
                <div class="blog-post-description">
                    ${post.description}
                </div>
                <div class="blog-post-timestamp">
                    ${post.created}
                </div>
            </div>
        `;
    })
    .join('<br>');
}