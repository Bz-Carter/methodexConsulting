import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $, jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }

  ngOnInit(){


    (function ($) {
        "use strict";
    
        /*--
            Commons Variables
        -----------------------------------*/
        var $window = $(window),
            $body = $('body');
    
        /*--
            Off Canvas Function
        -----------------------------------*/
        $('.header-mobile-menu-toggle, .mobile-menu-close').on('click', '.toggle', function () {
            $body.toggleClass('mobile-menu-open');
        });
        $('.site-mobile-menu').on('click', '.menu-toggle', function (e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.siblings('.sub-menu:visible, .mega-menu:visible').length) {
                $this.siblings('.sub-menu, .mega-menu').slideUp().parent().removeClass('open').find('.sub-menu, .mega-menu').slideUp().parent().removeClass('open');
            } else {
                $this.siblings('.sub-menu, .mega-menu').slideDown().parent().addClass('open').siblings().find('.sub-menu, .mega-menu').slideUp().parent().removeClass('open');
            }
        });
    
    
        $('.header-search-toggle').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.header-search-form, .header-search-form-2').slideToggle().parent().toggleClass('open');
        });
    
        $('.header-fs-search-toggle').on('click', function () {
            $('#fullscreen-search').addClass('open');
        });
        $('.fullscreen-search-close').on('click', '.toggle', function () {
            $('#fullscreen-search').removeClass('open');
        });
    
        $body.on('click', function (e) {
            if (!$(e.target).closest('.header-search').length && $window.width() < 768) {
                $('.header-search-form, .header-search-form-2').slideUp().parent().removeClass('open');
            }
            if (!$(e.target).closest('.site-main-mobile-menu-inner').length && !$(e.target).closest('.header-mobile-menu-toggle').length) {
                $body.removeClass('mobile-menu-open');
            }
        });
    
    
    })(jQuery);

      this.recallJsFuntions();
  }

  recallJsFuntions() {
      this.router.events
      .subscribe((event) => {
          if ( event instanceof NavigationStart ) {
            (function ($) {
                "use strict";
                /*--
                    Commons Variables
                -----------------------------------*/
                var $body = $('body');
            
                /*--
                    Off Canvas Function
                -----------------------------------*/
                $body.removeClass('mobile-menu-open');
            })(jQuery);
          }
      });
      this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
          $.getScript('assets/js/main.js');
          $('#preloader').fadeOut('slow');
          this.location = this.router.url;
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }
}


