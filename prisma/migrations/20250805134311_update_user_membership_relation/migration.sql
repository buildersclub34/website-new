-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyWebsite" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "currentProfile" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "fundingStatus" TEXT NOT NULL,
    "fundingAmount" TEXT DEFAULT '',
    "annualTurnover" TEXT NOT NULL,
    "lookingToRaise" BOOLEAN NOT NULL,
    "currentInvestors" TEXT DEFAULT '',
    "wantsToVolunteer" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "otherLocation" TEXT DEFAULT '',
    "referralSource" TEXT NOT NULL,
    "otherReferralSource" TEXT DEFAULT '',
    "inviteeDetails" TEXT DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "notes" TEXT DEFAULT '',
    "reviewedById" TEXT DEFAULT '',
    "reviewedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Membership_email_idx" ON "Membership"("email");

-- CreateIndex
CREATE INDEX "Membership_status_idx" ON "Membership"("status");

-- CreateIndex
CREATE INDEX "Membership_userId_idx" ON "Membership"("userId");
