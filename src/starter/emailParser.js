// function that parses emails from text that is stored in the file
// and returns an array of emails
function parseEmails(text) {
  const emailRegex = /[\w.-]+@[\w.-]+\.[\w.-]+/g;
  const emails = text.match(emailRegex)?.map((email) => email.toUpperCase());
  if (emails) {
    return emails;
  }
  return [];
}

console.log(
  parseEmails('hello@world.com, I wrote an email to neighbour@as.com')
);
