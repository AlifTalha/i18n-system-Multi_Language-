import { personService } from "../services/personService.js";
import { personSchema } from "../validators/personValidator.js";

export const personController = {
  createPerson: async (req, res) => {
    try {
      const { error, value } = personSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const newPerson = await personService.create(value);
      res.status(201).json(newPerson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllPersons: async (req, res) => {
    try {
      const lang = req.headers["accept-language"] || "en";
      const persons = await personService.findAll();

      const localized = persons.map((p) => ({
        id: p.id,
        name: p.name[lang] || p.name.en,
        address: p.address[lang] || p.address.en,
      }));

      res.json(localized);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getPersonById: async (req, res) => {
    try {
      const lang = req.headers["accept-language"] || "en";
      const person = await personService.findById(req.params.id);
      if (!person) return res.status(404).json({ error: "Person not found" });

      res.json({
        id: person.id,
        name: person.name[lang] || person.name.en,
        address: person.address[lang] || person.address.en,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updatePerson: async (req, res) => {
    try {
      const { error, value } = personSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const updated = await personService.update(req.params.id, value);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deletePerson: async (req, res) => {
    try {
      await personService.delete(req.params.id);
      res.json({ message: "Person deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
