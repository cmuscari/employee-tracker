INSERT INTO department (name)
VALUES
  ('Structural'),
  ('Building Envelope'),
  ('Materials Testing'),
  ('Administration');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Structural Manager', 120000.00, 1),
  ('BE Manager', 120000.00, 2),
  ('Materials Manager', 120000.00, 3),
  ('Administrative Manager', 80000.00, 4),
  ('Engineer', 85000.00, 1),
  ('Structural Drafter', 50000.00, 1),
  ('Architect', 85000.00, 2),
  ('Roof Inspector', 60000.00, 2),
  ('Architectural Drafter', 50000.00, 2),
  ('Petrographer', 100000.00, 3),
  ('Lab Assistant', 50000.00, 3),
  ('Administrative Associate', 50000.00, 4),
  ('Marketing Associate', 60000.00, 4),
  ('Customer Service Associate', 45000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Brian', 'Merrill', 1, NULL),
  ('Matthew', 'Carlton', 2, NULL),
  ('Daniel', 'Kim', 3, NULL),
  ('Lee', 'Lawrence', 4, NULL),
  ('Jeremiah', 'Fasl', 5, 1),
  ('Stephen', 'Foster', 5, 1),
  ('Daniel', 'Axson', 7, 2),
  ('Amy', 'Gelsone', 8, 2),
  ('Katy', 'Augenbough', 10, 3),
  ('Hunter', 'Grunden', 11, 3),
  ('Jason', 'Evers', 12, 4),
  ('Tiffany', 'Hanson', 13, 4),
  ('Freddy', 'Valladares', 6, 1);
  