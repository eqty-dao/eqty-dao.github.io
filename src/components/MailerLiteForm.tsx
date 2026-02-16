import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface MailerLiteFormProps {
  open: boolean;
  onClose: () => void;
}

const MailerLiteForm: React.FC<MailerLiteFormProps> = ({ open, onClose }) => {
  useEffect(() => {
    // Add success callback
    (window as any).ml_webform_success_30340136 = function() {
      const $ = (window as any).ml_jQuery || (window as any).jQuery;
      if ($) {
        $('.ml-subscribe-form-30340136 .row-success').show();
        $('.ml-subscribe-form-30340136 .row-form').hide();
      }
    };

    // Show/hide form based on open prop
    if ((window as any).ml && open) {
      (window as any).ml('show', '5uyFWY', true);
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <Helmet>
        {/* MailerLite Universal Script */}
        <script>
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1771100');
          `}
        </script>

        {/* MailerLite Webforms Script */}
        <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" type="text/javascript"></script>

        {/* MailerLite Tracking Script */}
        <script>
          {`fetch("https://assets.mailerlite.com/jsonp/1771100/forms/164340834794210600/takel")`}
        </script>

        {/* MailerLite Styles */}
        <style type="text/css">
          {`
            @import url("https://assets.mlcdn.com/fonts.css?version=1756385");
            
            /* LOADER */
            .ml-form-embedSubmitLoad {
              display: inline-block;
              width: 20px;
              height: 20px;
            }

            .g-recaptcha {
              transform: scale(1);
              -webkit-transform: scale(1);
              transform-origin: 0 0;
              -webkit-transform-origin: 0 0;
            }

            .sr-only {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0,0,0,0);
              border: 0;
            }

            .ml-form-embedSubmitLoad:after {
              content: " ";
              display: block;
              width: 11px;
              height: 11px;
              margin: 1px;
              border-radius: 50%;
              border: 4px solid #fff;
              border-color: #ffffff #ffffff #ffffff transparent;
              animation: ml-form-embedSubmitLoad 1.2s linear infinite;
            }
            
            @keyframes ml-form-embedSubmitLoad {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            
            #mlb2-30340136.ml-form-embedContainer {
              box-sizing: border-box;
              display: table;
              margin: 0 auto;
              position: static;
              width: 100% !important;
            }
            
            #mlb2-30340136.ml-form-embedContainer h4,
            #mlb2-30340136.ml-form-embedContainer p,
            #mlb2-30340136.ml-form-embedContainer span,
            #mlb2-30340136.ml-form-embedContainer button {
              text-transform: none !important;
              letter-spacing: normal !important;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper {
              background-color: #f6f6f6;
              border-width: 0px;
              border-color: transparent;
              border-radius: 4px;
              border-style: solid;
              box-sizing: border-box;
              display: inline-block !important;
              margin: 0;
              padding: 0;
              position: relative;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { 
              width: 400px; 
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper.embedForm { 
              max-width: 400px; 
              width: 100%; 
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-align-center { 
              text-align: center; 
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
              padding: 20px 20px 0 20px;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
              text-align: left;
              margin: 0 0 20px 0;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
              color: #000000;
              font-family: 'Open Sans', Arial, Helvetica, sans-serif;
              font-size: 30px;
              font-weight: 400;
              margin: 0 0 10px 0;
              text-align: left;
              word-break: break-word;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
              color: #000000;
              font-family: 'Open Sans', Arial, Helvetica, sans-serif;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              margin: 0 0 10px 0;
              text-align: left;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
              margin: 0 0 10px 0;
              width: 100%;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
              margin: 0;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
              background-color: #ffffff !important;
              color: #333333 !important;
              border-color: #cccccc;
              border-radius: 4px !important;
              border-style: solid !important;
              border-width: 1px !important;
              font-family: 'Open Sans', Arial, Helvetica, sans-serif;
              font-size: 14px !important;
              height: auto;
              line-height: 21px !important;
              margin-bottom: 0;
              margin-top: 0;
              margin-left: 0;
              margin-right: 0;
              padding: 10px 10px !important;
              width: 100% !important;
              box-sizing: border-box !important;
              max-width: 100% !important;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
              margin: 0 0 20px 0;
              float: left;
              width: 100%;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
              background-color: #000000 !important;
              border: none !important;
              border-radius: 4px !important;
              box-shadow: none !important;
              color: #ffffff !important;
              cursor: pointer;
              font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
              font-size: 14px !important;
              font-weight: 700 !important;
              line-height: 21px !important;
              height: auto;
              padding: 10px !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
              display: none;
            }
            
            #mlb2-30340136.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
              background-color: #333333 !important;
            }
            
            .ml-error input {
              border-color: red!important;
            }
            
            @media only screen and (max-width: 400px){
              .ml-form-embedWrapper.embedDefault, .ml-form-embedWrapper.embedPopup { 
                width: 100%!important; 
              }
            }
          `}
        </style>
      </Helmet>

      {/* MailerLite Form Modal */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div id="mlb2-30340136" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30340136">
            <div className="ml-form-align-center">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <div className="ml-form-embedContent">
                    <h4>Join Our Community</h4>
                    <p>Stay updated with the latest developments in our open source projects and community events.</p>
                  </div>

                  <form 
                    className="ml-block-form" 
                    action="https://assets.mailerlite.com/jsonp/1771100/forms/164340834794210600/subscribe" 
                    data-code="" 
                    method="post" 
                    target="_blank"
                  >
                    <div className="ml-form-formContent">
                      <div className="ml-form-fieldRow ml-last-item">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input 
                            aria-label="email" 
                            aria-required="true" 
                            type="email" 
                            className="form-control" 
                            data-inputmask="" 
                            name="fields[email]" 
                            placeholder="Email" 
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />

                    <div className="ml-form-embedSubmit">
                      <button type="submit" className="primary">Subscribe</button>
                      <button disabled style={{ display: 'none' }} type="button" className="loading">
                        <div className="ml-form-embedSubmitLoad"></div>
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>

                    <input type="hidden" name="anticsrf" value="true" />
                  </form>
                </div>

                <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                  <div className="ml-form-successContent">
                    <h4>Thank you!</h4>
                    <p>You have successfully joined our community newsletter.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
};

export default MailerLiteForm;