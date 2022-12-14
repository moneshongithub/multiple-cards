var arr = [
    { name: "abc", image: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", status: "Stranger", btn: "Add friend" },
    { name: "def", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", status: "Stranger", btn: "Add friend" },
    { name: "ghi", image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", status: "Stranger", btn: "Add friend" }
]

function show() {

    var clutter = "";

    arr.forEach(function (val, index) {

        clutter += `<div id="card">
    <img src="${val.image}" alt="">
    <h1>${val.name}</h1>
    <h3 id ="${val.status}">${val.status}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum optio aliquam natus vitae similique aspernatur.</p>
    <button class="${val.btn}" id="${index}">${val.btn}</button>
</div>`

    });

    document.querySelector("#cards").innerHTML = clutter;

}
show();

var lol
document.querySelector("#cards")
    .addEventListener("click", function (dets) {

        if (arr[dets.target.id].status === "Stranger") {

            arr[dets.target.id].status = "Sending request"
            arr[dets.target.id].btn = "cancel request"
            show();

            lol = setTimeout(function () {

                arr[dets.target.id].status = "Friend"
                arr[dets.target.id].btn = "Remove Friend"
                show();

            }, 2000)


        }

        else {
            clearTimeout(lol)
            arr[dets.target.id].status = "Stranger"
            arr[dets.target.id].btn = "Add Friend"
        }

        show();
    })