$(document).ready(function () {

    // Validate the form handle
    $(document).ready(function () {
        $.validator.addMethod("fileSize", function (value, element, param) {
            var fileSize = element.files[0]?.size || 0;
            return this.optional(element) || (fileSize <= param);
        }, "File size must be less than {0} bytes.");

        $("#admissionForm").validate({
            rules: {
                "firstName": {
                    required: true,
                    maxlength: 15,
                },
                "number": {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                "email": {
                    required: true,
                    email: true,
                    maxlength: 30
                },
                "course": {
                    required: true
                },
                "gender": {
                    required: true
                },
                "studyCenter": {
                    required: true
                },
                "sports": {
                    required: true
                },
                "photo": {
                    required: true,
                    fileSize: 10 * 1024 * 1024, // 10 MB in bytes
                },
                "description": {
                    required: true,
                    maxlength: 300
                },
                "termsCondition": {
                    required: true,
                },
            },
            messages: {
                "firstName": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter your first name!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your first name must be at most 15 characters long!</small>"
                },
                "number": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter your phone number!</small>",
                    minlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your phone number must be at least 10 digits!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your phone number must not exceed 10 digits!</small>"
                },
                "email": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter a valid email address!</small>",
                    email: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter a valid email address!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your email must not exceed 30 characters!</small>"
                },
                "course": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Select your course!</small>"
                },
                "sports": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Check at least one sports activity!</small>"
                },
                "studyCenter": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please select a study center!</small>"
                },
                "gender": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please select your gender!</small>"
                },
                "photo": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please upload your photo.</small>",
                    fileSize: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>File size must be less than 10 MB!</small>",
                },
                "description": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter a description!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your description must not exceed 300 characters!</small>"
                },
                "termsCondition": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Accept terms & condition.</small>"
                },
            },
            submitHandler: function (form) {
                $("button[type='submit']").addClass('hidden');
                $(".loader-btn").removeClass('hidden');
                form.submit();
            }
        });

        $("#admissionFormEdit").validate({
            rules: {
                "firstName": {
                    required: true,
                    maxlength: 15,
                },
                "number": {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                "email": {
                    required: true,
                    email: true,
                    maxlength: 30
                },
                "course": {
                    required: true
                },
                "gender": {
                    required: true
                },
                "studyCenter": {
                    required: true
                },
                "sports": {
                    required: true
                },
                "description": {
                    required: true,
                    maxlength: 300
                },
                "termsCondition": {
                    required: true,
                },
            },
            messages: {
                "firstName": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter your first name!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your first name must be at most 15 characters long!</small>"
                },
                "number": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter your phone number!</small>",
                    minlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your phone number must be at least 10 digits!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your phone number must not exceed 10 digits!</small>"
                },
                "email": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter a valid email address!</small>",
                    email: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter a valid email address!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your email must not exceed 30 characters!</small>"
                },
                "course": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Select your course!</small>"
                },
                "sports": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Check at least one sports activity!</small>"
                },
                "studyCenter": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please select a study center!</small>"
                },
                "gender": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please select your gender!</small>"
                },
                "description": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Please enter a description!</small>",
                    maxlength: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Your description must not exceed 300 characters!</small>"
                },
                "termsCondition": {
                    required: "<i class='fa-solid fa-circle-question mr-1 text-xs'></i><small>Accept terms & condition.</small>"
                },
            },
            submitHandler: function (form) {
                $("button[type='submit']").addClass('hidden');
                $(".loader-btn").removeClass('hidden');
                form.submit();
            }
        });
    });

    // form-description length handle for both craete and update from
    $("#about").on('input', function () {
        var length = $(this).val().length;
        $(".text-length").text(length);
        if (length >= 300) {
            $(this).val($(this).val().substring(0, 300));
            $(".text-length").text('300');
        }
    });

    // form-sports activity checkbox handle for both create and update form
    $("input[type='checkbox']").click(function () {
        var text = '';
        $("input[type='checkbox']:checked").each(function () {
            text += $(this).val() + ', ';
        });
        text = text.slice(0, -2);
        $('#hidden').val(text);
    });
});
