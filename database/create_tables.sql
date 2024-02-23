-- create_tables.sql

-- Table for staff pass ID to team name mapping
CREATE TABLE IF NOT EXISTS staff_mapping (
    id SERIAL PRIMARY KEY,
    staff_pass_id VARCHAR(255) NOT NULL,
    team_name VARCHAR(255) NOT NULL,
    created_at BIGINT DEFAULT extract(epoch from current_timestamp) * 1000
);

-- Table for redemption data
CREATE TABLE IF NOT EXISTS redemption_data (
    id SERIAL PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL,
    redeemed_at BIGINT DEFAULT extract(epoch from current_timestamp) * 1000
);
