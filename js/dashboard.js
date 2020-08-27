
jQuery(function($){

    //ENVELOPE BUTTON
    $('.icon-envelope').on({
        'click': function(){
            $('.envelopeSec').toggleClass('li-active');
            $('.notifiSec').removeClass('li-active');
            $('.userMenu').removeClass('logout-active');
            if($('.envelopeSec').hasClass('li-active')) {
                $('.headerSectionTwo').removeClass('menu-active');
            } else {
                $('.headerSectionTwo').addClass('menu-active');
            }
            /*if($('.headerSectionTwo').hasClass('menu-active')){
                $('.headerSectionTwo').removeClass('menu-active');
            }*/
        }
    });

    //NOTIFIcation
    $('.icon-ring').on({
        'click': function(){
            $('.notifiSec').toggleClass('li-active');
            $('.envelopeSec').removeClass('li-active');
            $('.userMenu').removeClass('logout-active');
            $('.headerSectionTwo').toggleClass('menu-active');
            if($('.notifiSec').hasClass('li-active')) {
                $('.headerSectionTwo').removeClass('menu-active');
            } else {
                $('.headerSectionTwo').addClass('menu-active');
            }
        }
    });

    //DROPDOWN ARROW
    $('.icon-down-open-big').on({
        'click': function(){
            $('.envelopeSec').removeClass('li-active');
            $('.notifiSec').removeClass('li-active');
            $('.userMenu').removeClass('logout-active');
            $('.headerSectionTwo').addClass('menu-active');

        }
    });
    //LOGOUT BUTTON (MENU)
    $('.logoutButton').on({
        'click' : function(){
            $('.envelopeSec').removeClass('li-active');
            $('.notifiSec').removeClass('li-active');
            $('.userMenu').toggleClass('logout-active');
        }
    });

    //GET HEADER TOP HEIGHT
   /* let topHeaderHeight = '',
        offsetSec       = '' ,
        windowHeight    = '',
        result          = '';

        topHeaderHeight = $('.topDHeader').height();
        offsetSec       = $('.sectionContent').offset().top - topHeaderHeight;
        windowHeight = window.innerHeight;
        result = windowHeight - (topHeaderHeight + offsetSec);
        $('.sectionContent').css('height', result);
        $('.menuleftHeader').css({
            'top' : topHeaderHeight + offsetSec,
            'height': result ,
        });*/
        //when window is resized
        /*$(window).on({
            'resize': function(){
                if(window.innerWidth < 1300) {
                    topHeaderHeight = $('.topDHeader').height();
                    offsetSec       = $('.sectionContent').offset().top;
                    result = windowHeight - (topHeaderHeight);
                    $('.menuleftHeader').css('height', result);
                }
            }
        });*/
    //END

    //start
    $('.icon-right-big').on({
        'click': function(){
            $(this).toggleClass('icon-active');
            $('.headerSectionTwo').toggleClass('menu-active');
            $('.envelopeSec').removeClass('li-active');
            $('.notifiSec').removeClass('li-active');
            $('.userMenu').removeClass('logout-active');
        }
    });
    $('.backSec').on({
        'click' :function(){
            $('.headerSectionTwo').removeClass('menu-active');
        }
    });
    //end 
    //start
    $('.changeButton p').on({
        'click': function(){
            $(this).parent().toggleClass('change-active');
        }
    });
    //end

    //start
    $('.content ul li a').each(function(){
        $(this).on({
            'click': function(){
                $(this).parent().toggleClass('drop-active').siblings().removeClass('drop-active');
            }
        });
    });
    //end

    //charts

    //chart --1--
        function chart1(){
            var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
                datasets: [{
                    label: 'Orders',
                    data: [3, 19, 8, 7, 2, 2, 6, 9, 3, 11, 4, 15],
                    backgroundColor: [
                        'rgba(95, 221, 229, 1)',
                        'rgba(95, 221, 229, 1)',

                        'rgba(95, 221, 229, 1)',
                        'rgba(95, 221, 229, 1)',

                        'rgba(95, 221, 229, 1)',
                        'rgba(95, 221, 229, 1)',

                        'rgba(95, 221, 229, 1)',
                        'rgba(95, 221, 229, 1)',

                        'rgba(95, 221, 229, 1)',
                        'rgba(95, 221, 229, 1)',
                        
                        'rgba(95, 221, 229, 1)',
                        'rgba(95, 221, 229, 1)',
                    ]
                },
                {
                    label: 'Products',
                    data: [5, 9, 14, 13, 2, 6, 5, 10 , 4, 13, 18, 7],
                    backgroundColor: [
                        'rgba(244, 234, 142, 1)',
                        'rgba(244, 234, 142, 1)',

                        'rgba(244, 234, 142, 1)',
                        'rgba(244, 234, 142, 1)',

                        'rgba(244, 234, 142, 1)',
                        'rgba(244, 234, 142, 1)',

                        'rgba(244, 234, 142, 1)',
                        'rgba(244, 234, 142, 1)',
                        
                        'rgba(244, 234, 142, 1)',
                        'rgba(244, 234, 142, 1)',

                        'rgba(244, 234, 142, 1)',
                        'rgba(244, 234, 142, 1)',
                    ]
                },
                {
                    label: 'Inventory',
                    data: [8, 11, 3, 5, 22, 10, 9, 12, 6, 18, 10, 9],
                    backgroundColor: [
                        'rgba(217, 32, 39, 1)',
                        'rgba(217, 32, 39, 1)',

                        'rgba(217, 32, 39, 1)',
                        'rgba(217, 32, 39, 1)',

                        'rgba(217, 32, 39, 1)',
                        'rgba(217, 32, 39, 1)',

                        'rgba(217, 32, 39, 1)',
                        'rgba(217, 32, 39, 1)',

                        'rgba(217, 32, 39, 1)',
                        'rgba(217, 32, 39, 1)',

                        'rgba(217, 32, 39, 1)',
                        'rgba(217, 32, 39, 1)',
                    ]
                }]
            },
            options: {
                scales: {
                /* yAxes: [{
                        gridLines: {
                            color: 'transparent'
                        },
                        ticks: {
                            beginAtZero: false
                        },
                    }],*/
                    xAxes: [{
                        gridLines: {
                            color: 'transparent'
                        },
                        ticks: {
                            beginAtZero: false,
                        },
                    }],
                },
                responsive: false,
                maintainAspectRatio: false,
            }
        });
        }
        chart1();
    //END CHARTS
    //START CIRCLE PROGRESS
    $('.first.circle').circleProgress({
        value: 0.35,
        size: 100,
        thickness: 4,
        lineCap: 'square',
        animation: true,
        fill: '#cb1e24'
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(100 * 0.35) + '<i>%</i>');
      });
    //END

    //START RADAR CHART
        var ctx = document.getElementById('myFirstChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
            datasets: [{
                label: 'Money',
                data: [3, 19, 8, 7, 2, 2, 6, 9, 3, 11, 4, 15],
                backgroundColor: [
                    'rgba(95, 221, 229, 0.2)',
                    'rgba(95, 221, 229, 0.2)',

                    'rgba(95, 221, 229, 0.2)',
                    'rgba(95, 221, 229, 0.2)',

                    'rgba(95, 221, 229, 0.2)',
                    'rgba(95, 221, 229, 0.2)',

                    'rgba(95, 221, 229, 0.2)',
                    'rgba(95, 221, 229, 0.2)',

                    'rgba(95, 221, 229, 0.2)',
                    'rgba(95, 221, 229, 0.2)',

                    'rgba(95, 221, 229, 0.2)',
                    'rgba(95, 221, 229, 0.2)',
                ],
                borderColor: [
                    'rgba(154, 208, 245, 1)',
                    'rgba(154, 208, 245, 1)',

                    'rgba(154, 208, 245, 1)',
                    'rgba(154, 208, 245, 1)',

                    'rgba(154, 208, 245, 1)',
                    'rgba(154, 208, 245, 1)',

                    'rgba(154, 208, 245, 1)',
                    'rgba(154, 208, 245, 1)',

                    'rgba(154, 208, 245, 1)',
                    'rgba(154, 208, 245, 1)',
                    
                    'rgba(154, 208, 245, 1)',
                    'rgba(154, 208, 245, 1)',
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
        }
    });
    //END
    //
    /*$(window).on({
        'resize': function(){
            chart1();
            chart2();
        }
    });*/
    //
    //START GOOGLE MAP
    //END GOOGLE MAP
});

//**active button */
$('.activeButton span').on({
    'click': function(){
        $(this).parent().toggleClass('button-t-active');
    }
});
/**End*/