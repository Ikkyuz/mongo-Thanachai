const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.get = async (req, res) => {
    const event = await prisma.events.findMany({
      include: { author: true }, // Include author details
    });
    res.json(event);
  };
  
  // Get a single post by ID
  exports.getById = async (req, res) => {
    const { id } = req.params;
    const event = await prisma.events.findUnique({
      where: { id: id },
      include: { author: true }, // Include author details
    });
    res.json(event);
  };

  exports.create = async (req, res) => {
    const {} = req.body; // Include authorId
    const result = await prisma.events.create({
      data: {
         // Associate with author
      },
    });
    res.json(result);
  };