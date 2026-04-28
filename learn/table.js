$(document).ready(function() {
    $('#vt1').on('show.bs.collapse', function () {
        $('#vt1-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#vt1-b').attr('aria-expanded', 'true');
    });

    $('#vt1').on('hide.bs.collapse', function () {
        $('#vt1-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#vt1-b').attr('aria-expanded', 'false');
    });
	
	$('#vt2').on('show.bs.collapse', function () {
        $('#vt2-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#vt2-b').attr('aria-expanded', 'true');
    });

    $('#vt2').on('hide.bs.collapse', function () {
        $('#vt2-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#vt2-b').attr('aria-expanded', 'false');
    });
	
	$('#nt1').on('show.bs.collapse', function () {
        $('#nt1-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#nt1-b').attr('aria-expanded', 'true');
    });

    $('#nt1').on('hide.bs.collapse', function () {
        $('#nt1-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#nt1-b').attr('aria-expanded', 'false');
    });
	
	$('#nt2').on('show.bs.collapse', function () {
        $('#nt2-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#nt2-b').attr('aria-expanded', 'true');
    });

    $('#nt2').on('hide.bs.collapse', function () {
        $('#nt2-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#nt2-b').attr('aria-expanded', 'false');
    });
	
	$('#nt3').on('show.bs.collapse', function () {
        $('#nt3-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#nt3-b').attr('aria-expanded', 'true');
    });

    $('#nt3').on('hide.bs.collapse', function () {
        $('#nt3-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#nt3-b').attr('aria-expanded', 'false');
    });
	
	$('#art3').on('show.bs.collapse', function () {
        $('#art3-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#art3-b').attr('aria-expanded', 'true');
    });

    $('#art3').on('hide.bs.collapse', function () {
        $('#art3-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#art3-b').attr('aria-expanded', 'false');
    });
	
	$('#awt3').on('show.bs.collapse', function () {
        $('#awt3-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#awt3-b').attr('aria-expanded', 'true');
    });

    $('#awt3').on('hide.bs.collapse', function () {
        $('#awt3-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#awt3-b').attr('aria-expanded', 'false');
    });
	
	$('#adt3').on('show.bs.collapse', function () {
        $('#adt3-ti').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#adt3-b').attr('aria-expanded', 'true');
    });

    $('#adt3').on('hide.bs.collapse', function () {
        $('#adt3-ti').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#adt3-b').attr('aria-expanded', 'false');
    });
});