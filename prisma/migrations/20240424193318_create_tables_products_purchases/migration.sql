-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "itle" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "zipcode" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "thumbnailHd" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pruchases" (
    "purchase_id" TEXT NOT NULL,
    "card_number" TEXT NOT NULL,
    "cliend_id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "pruchases_pkey" PRIMARY KEY ("purchase_id")
);
