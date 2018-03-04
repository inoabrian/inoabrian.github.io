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
}