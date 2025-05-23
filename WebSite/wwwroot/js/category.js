﻿var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Category/GetAll"
        },
        "columns": [
            { "data": "name", "width": "20%" },
           

            {
                "data": "id", "width": "20%",
                "render": function (data) {
                    return `<div class="btn-group" role="group">
                        <a href="/Admin/Category/Upsert?id=${data}" class="btn btn-primary"><i class="bi bi-pencil-square"></i> Edit</a>
                        <a onClick=Delete('/Admin/Category/Delete/${data}') class="btn btn-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>`
                }
            }
        ]
    });
}

function Delete(url) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })
        }
    });
}