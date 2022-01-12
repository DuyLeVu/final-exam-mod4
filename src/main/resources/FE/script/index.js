function loadHomeContent() {
    let html = `
    <div class="col-12">
    <center>
        <h1>Danh sách thành phố</h1>
        <h2>
            <button onclick="showFormAdd()">Thêm thành phố</button>
        </h2>
    </center>
     <div class="col-12" id="list-cities"></div>
    </div>`
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
                    '<td>' + data[i].id + '</td>' +
                    '<td onclick="showDetails(' + data[i].id + ')">' + data[i].name + '</td>' +
                    '<td>' + data[i].nation.name + '</td>' +
                    '<td><button class="btn btn-success" onclick="showEditCity(' + data[i].id + ')">Chỉnh sửa</button>' +
                    '<span> | </span>' +
                    '<button class="btn btn-danger" onclick="deleteById(' + data[i].id + ')">Xóa</button>' + '</td>'
            }
            html += `</tr></table>
                        </div>`;
            $("#list-cities").html(html);
        }
    })
}

function showFormAdd() {
    let form = `<form>
    <fieldset>
        <legend>Thêm thành phố</legend>
        <table>
            <tr>
                <td>Tên:</td>
                <td><input type="text" name="name" id="name"></td>
            </tr>
            <tr>
                <td>Quốc gia:</td>
                <td>
                    <select id="nationId" name="nationId">
                        <option>Select</option>`;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/nations/",
        success: function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                form += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            form += `</select>
                <tr>
                   <td>Diện tích:</td>
                   <td><input type="text" name="name" id="area"></td>
                </tr>
                 <tr>
                   <td>Dân số:</td>
                   <td><input type="text" name="name" id="population"></td>
                </tr>    
                <tr>
                   <td>GDP:</td>
                   <td><input type="text" name="name" id="gdp"></td>
                </tr> 
                <tr>
                   <td>Giới thiệu:</td>
                   <td><input type="text-area" name="name" id="description"></td>
                </tr> 
                </table>
                <button class="btn btn-success" onclick="saveCity()"">Nhập thành phố</button>
                <span> | </span>
                <button class="btn btn-danger" onclick="loadHomeContent()">Thoát</button>`;
            $("#content").html(form);
        }
    })
}

function saveCity() {
    let name = $("#name").val();
    let nationId = $("#nationId").val();
    let area = $("#area").val();
    let population = $("#population").val();
    let gdp = $("#gdp").val();
    let description = $("#description").val();
    let citi = {
        name: name,
        area: area,
        population: population,
        gdp: gdp,
        description: description,
        nation: {
            id: nationId
        }
    }
    console.log(citi)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/cities",
        data: JSON.stringify(citi),
        success: function () {
            loadHomeContent()
        },
        error: function (error) {
            alert("Lỗi server")
        }
    })
}

function showDetails(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/cities/" + id,
        success: function (data) {
            console.log(data)
            let html = `<div class="col-12"><div align="center">`
            html += '<h3>Thành phố ' + data.name + '</h3>' +
                '<button onclick="loadHomeContent()">Xem danh sách thành phố</button>' +
                '<p>Tên: ' + data.name + '</p>' +
                '<p>Quốc gia: ' + data.nation.name + '</p>' +
                '<p>Diện tích: ' + data.area + '</p>' +
                '<p>Dân số: ' + data.population + '</p>' +
                '<p>GDP: ' + data.gdp + '</p>' +
                '<p>Giới thiệu: ' + data.description + '</p>' +
                '<button class="btn btn-success" onclick="showEditCity(' + data.id + ')">Chỉnh sửa</button>' +
                '<span> | </span>' +
                '<button class="btn btn-danger" onclick="deleteById(' + data.id + ')">Xóa</button>';
            html += `</div></div>`;
            $("#content").html(html);
        }
    })
}
