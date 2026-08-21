const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@neelagiri.com' },
    update: {},
    create: {
      email: 'admin@neelagiri.com',
      password: hashedPassword,
      name: 'Neelagiri Admin',
      role: 'ADMIN',
    },
  });
  console.log('Admin user created:', admin.email);

  // Seed Customers
  const customers = [
    { name: 'Rahul', mobile: '919876543210', lastStay: new Date('2026-06-15'), customerType: 'Leisure', city: 'Kochi' },
    { name: 'Anjali', mobile: '919765432109', lastStay: new Date('2026-02-10'), customerType: 'Corporate', city: 'Kozhikode' },
    { name: 'Thomas', mobile: '919954321098', lastStay: new Date('2025-12-05'), customerType: 'Leisure', city: 'Bengaluru' },
    { name: 'Sneha', mobile: '919843210987', lastStay: new Date('2026-08-01'), customerType: 'VIP', city: 'Mumbai' },
    { name: 'John Doe', mobile: '14155552671', lastStay: new Date('2024-11-20'), customerType: 'International', city: 'San Francisco' },
  ];

  for (const c of customers) {
    await prisma.customer.upsert({
      where: { mobile: c.mobile },
      update: {},
      create: c,
    });
  }
  console.log('Customers seeded');

  // Seed Templates
  const templates = [
    {
      name: 'Weekend Offer',
      category: 'Promotional',
      content: '🌴 Weekend Escape at Neelagiri Heritage\n\nDear {{1}},\n\nMake your weekend special with our {{2}}.\n\nValid until {{3}}.\n\n[RESERVE NOW]'
    },
    {
      name: 'Festival Offer',
      category: 'Festival',
      content: '✨ Celebrate {{1}} at Neelagiri Heritage\n\nDear {{2}},\n\n{{3}}\n\nExperience the heritage and hospitality of Kozhikode.\n\n[BOOK NOW]'
    },
    {
      name: 'Birthday',
      category: 'Birthday',
      content: '🎂 Happy Birthday, {{1}}!\n\nHere\'s a special gift from Neelagiri Heritage:\n\n{{2}}\n\nWe look forward to welcoming you again.\n\n[BOOK NOW]'
    }
  ];

  for (const t of templates) {
    await prisma.template.upsert({
      where: { name: t.name },
      update: {},
      create: t,
    });
  }
  console.log('Templates seeded');

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
