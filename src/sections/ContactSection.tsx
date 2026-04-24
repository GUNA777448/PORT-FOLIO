
import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";
import { Input, Textarea } from "../components/ui/FormFields";
import { Button } from "../components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <Card className="reveal-item">
            <h3>{portfolioContent.contactTitle}</h3>
            <p>{portfolioContent.contactText}</p>
            <ul className="contact-list">
              {portfolioContent.contactItems.map((item) => (
                <li key={item.value}>{item.value}</li>
              ))}
            </ul>
          </Card>

          <Card className="reveal-item">
            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                label="Name"
                name="name"
                placeholder="Your name"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your project"
                rows={5}
                required
              />
              <Button type="submit">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
