# Dynamic Events

#### Application to dynamically add attendees and arrange seat organizations

## Checklist (**MVPs in bold**)

- Organizers
  - The "users" of the app (app is operation-focused)
  - [ ] **Register as Organizer**
  - [ ] **Auth in place**
  - [ ] **Profile shows all events user is organizing**
- Attendees
  - [ ] **Add Attendees**
  - [ ] **Delete Attendees**
  - [ ] **Edit Attendee information**
  - [ ] **Dynamic Information settings (PostgreSQL hstore?)**
  - [ ] Attendees can add/delete/edit their RSVP from mailer form
- Tables/seats
  - [ ] **Add seats and tables**
  - [ ] **Delete seats and tables**
  - [ ] Edit seats' content (person) and table notes
- Floorplan
  - [ ] **Render all current tables and seats**
  - [ ] **Attendee (add/delete/edit) form when clicked**
  - [ ] **Tables can be added/deleted/dragged**
- Events
  - [ ] **Contains a floorplan**
  - [ ] Implement events with multiple floorplans/rooms
- Calendar
  - [ ] Calendar to show organizer their upcoming events

  #### Fleshing out Invite vs Attendee
  TBD after mailer invite is created
  - [ ] Send RSVP invites via mailer?
