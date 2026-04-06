import { useState, useEffect } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 сек для тесту
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        margin: "100px auto",
        width: "300px"
      }}>
        <h3>Контакт</h3>

        <form action="https://formspree.io/f/xdapwrja" method="POST">
          <input name="name" placeholder="Ім’я" /><br/>
          <input name="email" placeholder="Email" /><br/>
          <textarea name="message"></textarea><br/>
          <button type="submit">Відправити</button>
        </form>

        <button onClick={() => setIsOpen(false)}>Закрити</button>
      </div>
    </div>
  );
}

export default ContactForm;