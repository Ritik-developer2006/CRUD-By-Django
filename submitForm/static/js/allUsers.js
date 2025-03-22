$(document).ready(function () {
    // data table handle
    $('#students').DataTable();

    // for delete modal handle
    $('.openModal').on('click', function () {
        var id = $(this).closest('tr').find('.hidden-value').val()
        $('#get_id').val(id)
        $('#modal').removeClass('hidden')
        setTimeout(function () {
            $('#modal').removeClass('opacity-0')
        }, 10)
    })
    $('.closeModal').on('click', function () {
        $('#modal').addClass('opacity-0')
        setTimeout(function () {
            $('#modal').addClass('hidden')
        }, 300)
    })

    // for edit modal handle
    $('.openModalEdit').on('click', function () {
        var uid = $(this).closest('tr').find('.hidden-value').val()
        $('#modal-edit').removeClass('hidden')
        setTimeout(function () {
            $('#modal-edit').removeClass('opacity-0')
        }, 10)
    })
    $('.closeModalEdit').on('click', function () {
        $('#modal-edit').addClass('opacity-0')
        setTimeout(function () {
            $('#modal-edit').addClass('hidden')
        }, 300)
    })

    // delete record ajax handle
    $('#delete_record').click(function () {
        $('#delete_record').addClass("hidden")
        $(".delete-loader").removeClass("hidden")
        var id = $('#get_id').val()
        var csrfToken = $('meta[name="csrf-token"]').attr('content')
        $.ajax({
            url: '/my-form/delete-record/',
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                Id: id
            },
            success: function (response) {
                if (response.status === 'success') {
                    toastr.success(response.message)
                    setTimeout(function () {
                        location.reload()
                    }, 2000)
                } else {
                    toastr.error(response.message)
                    $('#delete_record').removeClass("hidden")
                    $(".delete-loader").addClass("hidden")
                }
            },
            error: function (xhr, status, error) {
                $('#delete_record').removeClass("hidden")
                $(".delete-loader").addClass("hidden")
                toastr.error('Something was wrong!')
            }
        })
    })

    function countChar(){
        var length = $("#about").val().length;
        $(".text-length").text(length);
    }

    function setCheckedCheckboxes() {
        var text = $('#hidden').val();
        var activities = text.split(', ');
        $("input[type='checkbox']").each(function () {
            if (activities.includes($(this).val())) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    }

    // get user record ajax handle
    $('.openModalEdit').click(function () {
        var id = $(this).closest('tr').find('.hidden-value').val()
        $('#modal-edit').removeClass('hidden')
        setTimeout(function () {
            $('#modal-edit').removeClass('opacity-0')
        }, 10)
        var csrfToken = $('meta[name="csrf-token"]').attr('content')
        $.ajax({
            url: '/my-form/edit-record/',
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                Id: id
            },
            success: function (response) {
                if (response.status === 'success') {
                    console.log(response.data.photo)
                    $("#id-hidden").val(response.data.Id)
                    $("#first-name").val(response.data.firstName)
                    $("#last-name").val(response.data.lastName)
                    $("#phone-number").val(response.data.number)
                    $("#email").val(response.data.email)
                    $("#course").val(response.data.course)
                    $("#study-center").val(response.data.studyCenter)
                    $("#about").val(response.data.description)
                    $("#hidden").val(response.data.sportsActivity)
                    $(".prev_image").html(`<img src="${response.data.photo}" width="80px" style="height:80px;" class="rounded-full"/>`)
                    countChar()
                    if (response.data.gender === 'm') {
                        $("#male").prop("checked", true);
                    } else if (response.data.gender === 'f') {
                        $("#female").prop("checked", true);
                    } else if (response.data.gender === 'o') {
                        $("#other").prop("checked", true);
                    }
                    setCheckedCheckboxes()
                } else {
                    toastr.error(response.message)
                    $('#delete_record').removeClass("hidden")
                    $(".delete-loader").addClass("hidden")
                }
            },
            error: function (xhr, status, error) {
                $('#delete_record').removeClass("hidden")
                $(".delete-loader").addClass("hidden")
                toastr.error('Something was wrong!')
            }
        })
    })
})