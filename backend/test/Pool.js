const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Pool Contract", async function () {
    beforeEach(async function () {
        const Pool = await ethers.getContractFactory("Pool");
        pool = await Pool.deploy();
        await pool.waitForDeployment();
        console.log("Pool deployed to: ", await pool.getAddress());
      });

    it("Testing Liquidity", async function () {
        await pool.add_liquidity(5, 1);
        expect(await pool.supply_x()).to.equal(10);
        expect(await pool.supply_y()).to.equal(2);
    });


    it("Swapping X", async function () {
        await pool.swap_x(1);
        expect(await pool.supply_x()).to.equal(0);
        expect(await pool.supply_y()).to.equal(2);
    });

    it("Swapping Y", async function () {
        await pool.swap_y(5);
        expect(await pool.supply_x()).to.equal(10);
        expect(await pool.supply_y()).to.equal(0);
    });
});

