const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.get = async (req, res) => {
  const camera = await prisma.cameras.findMany({
    include: { author: true }, // Include author details
  });
  res.json(camera);
};

// Get a single post by ID
exports.getById = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.findUnique({
    where: { id: id },
    include: { author: true }, // Include author details
  });
  res.json(camera);
};

exports.getByIp = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.findUnique({
    where: { ip_adderss: id },
    include: { author: true }, // Include author details
  });
  res.json(camera);
};

exports.create = async (req, res) => {
  const {} = req.body; // Include authorId
  const result = await prisma.cameras.create({
    data: {
      title: title,
      content: content,
      authorId: authorId, // Associate with author
    },
  });
  res.json(result);
};
