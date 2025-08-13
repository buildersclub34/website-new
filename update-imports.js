const fs = require('fs');
const path = require('path');

// Files to update and their new import statements
const filesToUpdate = [
  {
    file: 'app/src/app/(marketing)/_components/UnfairAdvantages.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/Testimonials.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/SpeakersSection.tsx',
    oldImport: "import { SectionHeader } from '../ui/SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/PartnerInitiatives.tsx',
    oldImport: "import { SectionHeader } from './ui/SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/OurPerks.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/OfficialPartners.tsx',
    oldImport: "import { SectionHeader } from './ui/SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/InvestmentPartners.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/Hero.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/Contact.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/BuildersTeam.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/BrandsSection.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  },
  {
    file: 'app/src/app/(marketing)/_components/AdvisorsSection.tsx',
    oldImport: "import SectionHeader from './SectionHeader';",
    newImport: "import { SectionHeader } from '@/components/ui/SectionHeader';"
  }
];

// Update each file
filesToUpdate.forEach(({ file, oldImport, newImport }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(oldImport)) {
      content = content.replace(oldImport, newImport);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in ${file}`);
    } else {
      console.log(`Skipped ${file} - import not found`);
    }
  } else {
    console.log(`Skipped ${file} - file not found`);
  }
});

console.log('Import updates complete!');
