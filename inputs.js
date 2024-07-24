/* 
Section 5: Making the website work
- Add your calendly link between the quotation marks '' below
*/
const emailOctopusScript = ''
const calendlyLink = ''

/*
Section 6: Branding and color
- Here we will outline how we want the website to look like
- To do this we will mainly be using hex codes which we discussed in section 2  
- Below you can see the hex codes for the colors white and black

White hex color code: #FFFFFF
Black hex color code: #000000
*/

// HIGH PRIORITY CHANGES
// Branding: Update with your company logo, name and colors
const logoFileName = 'logo.png'

const companyName = 'Reddit'
const companyNameColor = 'green'

const buttonBackgroundColor = 'green' // Likely the same as your company name color
const buttonTextColor = '#FFFFFF' // Make this either black (#000000) or white (#FFFFFF) depending on what is easiest to read on your button color of choice

// Social media: Update with links to your social media accounts. Leave blank if not relevant
const facebookLink = ''
const instagramLink = ''
const xLink = 'https://x.com'
const linkedinLink = ''
const youtubeLink = ''
const tiktokLink = ''
const discordLink = ''

// Header and description: Update with your value statements
const headerText = 'This is what I do' // One-line description of what you will offer customers
const descriptionText = 'This is a longer description of what the hell I do because I have no idea' // More detailed description of what you will offer customers

// Email address: Update with your own email address. Leave blank if not relevant
const contactEmail = 'example@reddit.com'



// LOW PRIORITY CHANGES
// Branding: Update with different background and text colors if needed
const pageBackgroundColor = '#FFFFFF'
const pageTextColor = '#000000'

// Social media: Update the call to action with your own
const socialMediaCallToAction = 'Find us on social media'

// Waitlist: Update the call to action with your own
const waitlistCallToAction = 'Join the wait-list'

// Calendly: Update the calls to action with your own
const meetingCallToAction = 'Talk to us'
const meetingButtonText = 'Schedule a meeting'




// LOWEST PRIORITY CHANGES (For special cases)
// Forms: Change from white if it does not fit with your new background color
const formWrapperColor = '#FFFFFF'

// Social media: Change the colors if they do not fit with your new background color
const facebookLogoColor = '#4267B2'
const instagramLogoColor = '#E1306C'
const xLogoColor = '#000000'
const linkedinLogoColor = '#0077b5'
const youtubeLogoColor = '#FF0000'
const tiktokLogoColor = '#000000'
const discordLogoColor = '#5865F2'
























// Ignore the below code. It allows us to use the variables you have defined.
function splitScript(script) {
    const srcMatch = script.match(/src="([^"]+)"/);
    const dataFormMatch = script.match(/data-form="([^"]+)"/);

    const waitlistFormScriptSrc = srcMatch ? srcMatch[1] : null;
    const waitlistFormScriptDataForm = dataFormMatch ? dataFormMatch[1] : null;

    return {
        waitlistFormScriptSrc,
        waitlistFormScriptDataForm
    };
}

const { waitlistFormScriptSrc, waitlistFormScriptDataForm } = splitScript(emailOctopusScript);
