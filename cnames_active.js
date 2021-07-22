/*
 ***** ACTIVE SUBDOMAINS
 * ***********************
 *
 * for the moment the following subdomains are active
 * file a pull request to add your own GitHub Page
 *
 *
 **** README
 * ***********
 *
 * KEY:         The subdomain you request (e.g.: "yourserver" would give the custom domain "yourserver.minecraft.bot").
 *
 * VALUE:       The regular domain provided by GitHub (e.g.: "foo.github.io" for a User-/Organization Page
 *              or "foo.github.io/bar" for a Project Page).
 *
 * CLOUDFLARE:  Minecraft.BOT uses CloudFlare as its DNS. By default, CloudFlare proxies all requests to your subdomain
 *              to get SSL support (https://yourserver.minecraft.bot) and make use of browser caching with a TTL of 30 min.
 *              But you can opt-out from this and make Cloudflare forward all requests directly to GitHub.
 *              Just add '//noCF' in the line of your requested subdomain to give us a hint.
 *              (all the lines marked with '//noCF?' are from a time when a requester had to explicitly opt-in;
 *              see: https://github.com/MinecraftBotOfficial/minecraft.bot/issues/554)
 *
 * IMPORTANT:   To authorize yourself as the owner of the GitHub Page you must have added a valid CNAME file
 *              (with the requested domain, e.g.: "yourserver.minecraft.bot") to your repository.
 *              The requested subdomain must match either your GitHub username or the name of your project
 *              repository. Exceptions are possible for the sake of clarity (e.g. if your project has the
 *              name "yournetwork" you can request "your").
 *
 * NOTICE:      Please follow the format set by everyone else in this file. Entries should use double quotes,
 *              with space between the colon (after the key) and the value and should always be in alphabetical
 *              order. Each line apart from the very last entry should have a comma after it to ensure this file
 *              is valid syntax.
 *
 *              BECAUSE OF THE RISK OF ABUSE, I´M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE CONTENT!
 */

var cnames_active = {
 "": "minecraftbotofficial.github.io",
 "example": "lnfernal.github.io" // This one is actually invalid since it's an example to demonstrate an example site
}
