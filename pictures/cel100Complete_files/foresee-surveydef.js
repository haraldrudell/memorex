FSR.surveydefs = [{
    name: 'intelligent',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 50,
        lf: 1
    },
    include: {
        urls: ['intelligent']
    }
}, {
    name: 'browse',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 10,
        lf: 3
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    repeatoverride: false,
    
    altcookie: {},
    
    language: {
        locale: 'en'
    },
    
    exclude: {},
    
    zIndexPopup: 10000,
    
    ignoreWindowTopCheck: false,
    
    reverseButtons: false,
    
    ipexclude: 'fsr$ip',
    
    invite: {
        content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 8px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 8px 0;\">Thank you for visiting our website. You have been selected to participate<br>in a brief customer satisfaction survey to let us know how we can improve<br>your experience.</div>\
      <div style=\"font-weight:bold;\">The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.</div>\
      </div></div>',
        
        /*content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
         <b><font size=\"3\">We\'d like your feedback.</b></font>\
         <br><br>Thank you for visiting our site. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.\
         <br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>',
         */
        footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt; \">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
        
        exclude: {
            local: ['welcome'],
            referrer: []
        },
        include: {
            local: ['.']
        },
        
        width: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        timeout: 0,
        buttons: {
            accept: "Yes, I'll give feedback",
            decline: 'No thanks'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        hide: [],
        type: 'dhtml',
        url: 'invite.html'
    },
    
    tracker: {
        width: '690',
        height: '415',
        timeout: 3,
        adjust: true,
        alert: {
            enabled: true,
            message: 'The survey is now available.'
        },
        url: 'tracker.html'
    },
    
    survey: {
        width: 690,
        height: 600
    },
    
    qualifier: {
        width: '690',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: false,
        url: 'qualifying.html'
    },
    
    cancel: {
        url: 'cancel.html',
        width: '690',
        height: '400'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802,
            followup: 803,
            information: 804,
            content: 805
        },
        pd: 7,
        custom: {}
    },
    
    pool: 100,
    
    previous: false,
    
    analytics: {
        google: false
    },
    
    cpps: {
        specialslot: {
            source: 'variable',
            name: 'specialslot'
        },
        displayedChannel: {
            source: 'variable',
            name: 'displayedChannel'
        },
        displayedSection: {
            source: 'variable',
            name: 'displayedSection'
        }
    },
    
    mode: 'first-party'
};
