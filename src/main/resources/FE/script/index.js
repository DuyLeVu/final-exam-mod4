function loadHomeContent() {
    let html = `
    <center>
    <h1>Danh sách thành phố</h1>
    <h2>
        <button onclick="showFormAdd()">Thêm thành phố</button>
    </h2>
    </center>
     <div class="col-12" id="list-cities"></div>`
    $("#content").html(html);
    showAll();
}

function showAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/cities",
        success: function (data) {
            console.log(data)
            let html = `<div align="center">
        <table border="1" cellpadding="5">
            <tr>
                <th>#</th>
                <th>Thành Phố</th>
                <th>Quốc gia</th>
                <th></th>
            </tr>`;

            for (let i = 0; i < data.length; i++) {
                html += '<tr>' +
                    '<td>' + data[i].id +'</td>' +
                    '<td>' + data[i].name +'</td>' +
                    '<td>' + data[i].nation.name +'</td>' +
                    '<td><button class="btn btn-success" onclick="showEditPost(' + data[i].id + ')">Edit</button>' +
                    '<span> | </span>' +
                    '<button class="btn btn-danger" onclick="deleteById(' + data[i].id + ')">Delete</button>' +'</td>'
            }
            html += `</div>`;
            $("#list-cities").html(html);
        }
    })
}
function showFormAdd()
    {
    }
